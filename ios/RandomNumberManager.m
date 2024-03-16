#import "RandomNumberManager.h"

@implementation RandomNumberManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getRandomNumber:(RCTResponseSenderBlock)callback) {
    NSNumber *randomNumber = [NSNumber numberWithInt:arc4random_uniform(100)];
    callback(@[[NSNull null], randomNumber]);
}

@end
