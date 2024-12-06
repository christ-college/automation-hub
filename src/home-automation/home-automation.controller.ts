import { Body, Controller, Delete, Get, HttpCode, Post, Put, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { HomeAutomationService } from './home-automation.service';
import { PhotoReply, CameraSettings } from './dto/cameraDto'

@Controller('home-automation')
export class HomeAutomationController {
    constructor(private readonly homeAutomationService: HomeAutomationService) {}

	// parameters and queryParameters are always strings.
    @Get('camera/photo/:id')
    async getCameraPhoto(@Param('id') id: string): Promise<PhotoReply> {
        return await this.homeAutomationService.getCameraPhoto(id);
    }

    @Put('camera/settings')
	@ApiOperation({ summary: 'update camera settings.' })
	@ApiOkResponse({
		status: 200,
		description: 'Successfully update camera settings',
	})
	async updateCameraSettings(
		@Body() cameraSettings: CameraSettings,
	): Promise<string> {
		return await this.homeAutomationService.updateCameraSettings(
			cameraSettings
		);
	}
}
