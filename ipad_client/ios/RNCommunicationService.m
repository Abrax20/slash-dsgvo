//
//  RNBeacon.m
//  ipad_client
//
//  Created by Christoph Abs on 30.03.19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>


@interface RCT_EXTERN_MODULE(RNCommunicationService, RCTEventEmitter)
RCT_EXTERN_METHOD(sendMessage)
@end
