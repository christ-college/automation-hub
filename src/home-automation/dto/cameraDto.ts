
import {
    IsBoolean,
    IsNotEmpty,
    IsString,
    IsNumber,
    IsEnum,
    // IsObject,
    // IsOptional,
} from 'class-validator';

import { DeviceIdentity } from '../../const/common'


export enum CameraActions {
	Picture = 'Picture',
	Video = 'Video',
}

export enum DeviceStatus {
	OK = 'OK',
	Unavailable = 'Unavailable',
}


export type PhotoRequest = DeviceIdentity & {
	action: CameraActions.Picture;
};


export type PhotoReply =  {
	img?: string;  // Base64String
    deviceStatus: DeviceStatus
};


// For now dummy only
export type CameraSettings = DeviceIdentity & {
    frameRate?: number;
    shutterSpeed?: number;
}
