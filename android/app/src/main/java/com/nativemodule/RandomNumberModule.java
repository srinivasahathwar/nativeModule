package com.nativemodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Random;

public class RandomNumberModule extends ReactContextBaseJavaModule {
    
    public RandomNumberModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RandomNumberManager";
    }

    @ReactMethod
    public void getRandomNumber(Callback callback) {
        Random random = new Random();
        int randomNumber = random.nextInt(100);
        callback.invoke(null, randomNumber);
    }
}