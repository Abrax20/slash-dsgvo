//
//  Test.swift
//  tablet_client
//
//  Created by Christoph Abs on 30.03.19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import CoreLocation
import CoreBluetooth

@objc(RNChristoph)
class RNChristoph: NSObject {
  var beacon : Any?;
  
  @objc
  func setup() {
    let proximityUUID = UUID(uuidString:
      "39ED98FF-2900-441A-802F-9C398FC199D2")
    let major : CLBeaconMajorValue = 100
    let minor : CLBeaconMinorValue = 1
    let beaconID = "com.example.myDeviceRegion"
    self.beacon = CLBeaconRegion(proximityUUID: proximityUUID!,
                                 major: major, minor: minor, identifier: beaconID)
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
/*
 func createBeaconRegion() -> CLBeaconRegion? {
    let proximityUUID = UUID(uuidString:
      "39ED98FF-2900-441A-802F-9C398FC199D2")
    let major : CLBeaconMajorValue = 100
    let minor : CLBeaconMinorValue = 1
    let beaconID = "com.example.myDeviceRegion"
    
    return CLBeaconRegion(proximityUUID: proximityUUID!,
                          major: major, minor: minor, identifier: beaconID)
  }
  func advertiseDevice(region : CLBeaconRegion) {
    let peripheral = CBPeripheralManager(delegate: self, queue: nil)
    let peripheralData = region.peripheralData(withMeasuredPower: nil)
    
    peripheral.startAdvertising(((peripheralData as NSDictionary) as! [String : Any]))
  }

*/
