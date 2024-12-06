import {
    IsBoolean,
    IsNotEmpty,
    IsString,
    IsNumber,
    IsEnum,
    // IsObject,
    // IsOptional,
} from 'class-validator';

export enum DeviceType {
	Camera = 'camera',
	Bulb = 'Bulb',
}


export class DeviceIdentity {
    @IsString()
    Id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEnum(DeviceType)
    type: DeviceType;

    // @IsString()
    // status?: string;
}
