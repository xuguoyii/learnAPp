package com.learnreactnative;

import android.os.Bundle; // here

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "learnReactNative";
    }
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
        new SplashScreenReactPackage()  //here
        );
    }
}
