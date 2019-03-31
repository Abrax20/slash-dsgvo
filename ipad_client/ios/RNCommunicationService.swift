//
//  File.swift
//  ipad_client
//
//  Created by Christoph Abs on 30.03.19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(RNCommunicationService)
class RNCommunicationService : RCTEventEmitter, CommunicationServiceDelegate {
  //let communicationService = CommunicationService();
  
  func connectedDevicesChanged(manager: CommunicationService, connectedDevices: [String]) {
    print("Device Connect");
  }
  
  func onMessage(manager: CommunicationService, message: String) {
    //sendEvent(withName: "onMessage", body: ["message": message])
  }
  
  @objc
  func sendMessage() {
    //communicationService.send(message: "Test Message");
  }

  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func supportedEvents() -> [String]! {
    return ["onMessage"]
  }
}
