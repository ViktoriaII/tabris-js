import {Device, device, PropertyChangedEvent} from 'tabris';

type Orientation = 'landscape-primary' | 'landscape-secondary' | 'portrait-primary' | 'portrait-secondary';
// Properties
let language: string;
let model: string;
let orientation: Orientation;
let platform: 'Android' | 'iOS' | 'windows';
let scaleFactor: number;
let screenHeight: number;
let screenWidth: number;
let version: string;

language = device.language;
model = device.model;
orientation = device.orientation;
platform = device.platform;
scaleFactor = device.scaleFactor;
screenHeight = device.screenHeight;
screenWidth = device.screenWidth;
version = device.version;

// Events
let target: Device = device;
let timeStamp: number = 0;
let type: string = 'foo';
let value: Orientation = orientation;

let orientationChangedEvent: PropertyChangedEvent<Device, Orientation> = {target, timeStamp, type, value};

device.on({
  orientationChanged: (event: PropertyChangedEvent<Device, Orientation>) => {}
});
