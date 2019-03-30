//
//  Test.swift
//  tablet_client
//
//  Created by Christoph Abs on 30.03.19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import MultipeerConnectivity

import Foundation
import MultipeerConnectivity

protocol CommunicationServiceDelegate {
  func connectedDevicesChanged(manager : CommunicationService, connectedDevices: [String])
  func onMessage(manager : CommunicationService, message: String)
}

class CommunicationService : NSObject {
  
  var delegate : CommunicationServiceDelegate?;
  
  // Service type must be a unique string, at most 15 characters long
  // and can contain only ASCII lowercase letters, numbers and hyphens.
  private let CommunicationServiceType = "mevisiteipadtoi"
  
  private let myPeerId = MCPeerID(displayName: UIDevice.current.name)
  private let serviceAdvertiser : MCNearbyServiceAdvertiser
  private let serviceBrowser : MCNearbyServiceBrowser

  lazy var session : MCSession = {
    let session = MCSession(peer: self.myPeerId, securityIdentity: nil, encryptionPreference: .required)
    session.delegate = self
    return session
  }()
  
  override init() {
    self.serviceAdvertiser = MCNearbyServiceAdvertiser(peer: myPeerId, discoveryInfo: nil, serviceType: CommunicationServiceType)
    self.serviceBrowser = MCNearbyServiceBrowser(peer: myPeerId, serviceType: CommunicationServiceType)

    
    super.init()
    self.serviceAdvertiser.delegate = self
    self.serviceAdvertiser.startAdvertisingPeer()
    
    self.serviceBrowser.delegate = self;
    self.serviceBrowser.startBrowsingForPeers()
  }
  
  deinit {
    self.serviceAdvertiser.stopAdvertisingPeer()
    self.serviceBrowser.stopBrowsingForPeers()
  }

  func send(message : String) {
    NSLog("%@", "message: \(message) to \(session.connectedPeers.count) peers")
    
    if session.connectedPeers.count > 0 {
      do {
        try self.session.send(message.data(using: .utf8)!, toPeers: session.connectedPeers, with: .reliable)
      }
      catch let error {
        NSLog("%@", "Error for sending: \(error)")
      }
    }
    
  }
}

extension CommunicationService : MCNearbyServiceAdvertiserDelegate {

  func advertiser(_ advertiser: MCNearbyServiceAdvertiser, didNotStartAdvertisingPeer error: Error) {
    NSLog("%@", "didNotStartAdvertisingPeer: \(error)")
  }
  
  func advertiser(_ advertiser: MCNearbyServiceAdvertiser, didReceiveInvitationFromPeer peerID: MCPeerID, withContext context: Data?, invitationHandler: @escaping (Bool, MCSession?) -> Void) {
    NSLog("%@", "didReceiveInvitationFromPeer \(peerID)")
    invitationHandler(true, self.session)
  }
}


extension CommunicationService : MCNearbyServiceBrowserDelegate {
  func browser(_ browser: MCNearbyServiceBrowser, didNotStartBrowsingForPeers error: Error) {
    NSLog("%@", "didNotStartBrowsingForPeers: \(error)")
  }
  
  func browser(_ browser: MCNearbyServiceBrowser, foundPeer peerID: MCPeerID, withDiscoveryInfo info: [String : String]?) {
    NSLog("%@", "foundPeer: \(peerID)")
    NSLog("%@", "invitePeer: \(peerID)")
    browser.invitePeer(peerID, to: self.session, withContext: nil, timeout: 10)
  }
  
  func browser(_ browser: MCNearbyServiceBrowser, lostPeer peerID: MCPeerID) {
    NSLog("%@", "lostPeer: \(peerID)")
  }
}

extension CommunicationService : MCSessionDelegate {
  
  func session(_ session: MCSession, peer peerID: MCPeerID, didChange state: MCSessionState) {
    NSLog("%@", "peer \(peerID) didChangeState: \(state.rawValue)")
    self.delegate?.connectedDevicesChanged(manager: self, connectedDevices:
      session.connectedPeers.map{$0.displayName})
  }
  
  func session(_ session: MCSession, didReceive data: Data, fromPeer peerID: MCPeerID) {
    NSLog("%@", "didReceiveData: \(data)")
    let str = String(data: data, encoding: .utf8)!
    self.delegate?.onMessage(manager: self, message: str)
  }
  
  func session(_ session: MCSession, didReceive stream: InputStream, withName streamName: String, fromPeer peerID: MCPeerID) {
    NSLog("%@", "didReceiveStream")
  }
  
  func session(_ session: MCSession, didStartReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, with progress: Progress) {
    NSLog("%@", "didStartReceivingResourceWithName")
  }
  
  func session(_ session: MCSession, didFinishReceivingResourceWithName resourceName: String, fromPeer peerID: MCPeerID, at localURL: URL?, withError error: Error?) {
    NSLog("%@", "didFinishReceivingResourceWithName")
  }
  
}
/*
 let proximityUUID = UUID(uuidString:
 "39ED98FF-2900-441A-802F-9C398FC199D2")
 let major : CLBeaconMajorValue = 100
 let minor : CLBeaconMinorValue = 1
 let beaconID = "com.example.myDeviceRegion"
 self.locationManager = CLLocationManager()
 
 self.locationManager?.requestAlwaysAuthorization()
 self.locationManager?.delegate = self
 
 self.beacon = CLBeaconRegion(proximityUUID: proximityUUID!,
 major: major, minor: minor, identifier: beaconID)
 let peripheral = CBPeripheralManager(delegate: self, queue: nil);
 let peripheralData = self.beacon?.peripheralData(withMeasuredPower: nil)
 
 peripheral.startAdvertising(((peripheralData as! NSDictionary) as! [String : Any]))
 
 self.locationManager?.startMonitoring(for: (self.beacon ?? nil)!)
 self.locationManager?.startRangingBeacons(in: (self.beacon ?? nil)!)
 */
