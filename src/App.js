import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';

import Welcome from './panels/Welcome';
import Start from './panels/Start';
import Registration from './panels/Registration';
import Geolocation from './panels/Geolocation';
import Notification from './panels/Notification';
import Smartphone from './panels/Smartphone';
import Monetization from './panels/Monetization';
import Business from './panels/Business';
import Contacts from './panels/Contacts';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'welcome',
			fetchedUser: null,
			showResult: false,
			geodata: {
				lat: 55.0419,
				lng: 82.9301
			},
			allowNotification: false,
			turnFlashlight: false
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetClientVersionResult':
					this.setState({ platform: e.detail.data.platform });
					if (this.state.platform === 'android') {
						connect.send('VKWebAppSetViewSettings', {
							status_bar_style: 'light',
							action_bar_color: '#1F3375'
						});
					}
					break;
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				case 'VKWebAppGeodataResult':
					this.setState({
						geodata: {
							lat: e.detail.data.lat ? e.detail.data.lat : 55.0419,
							lng: e.detail.data.long ? e.detail.data.long : 82.9301
						}
					});
					this.setState({ showResult: true });
					break;
				case 'VKWebAppGeodataFailed':
					if (e.detail.data.reason === "User didn't allowed") {
						this.sendPushMessage('Ой! Кто-то отменил наш запрос.');
					};
					break;
				case 'VKWebAppAllowNotificationsResult':
					this.setState({ allowNotification: e.detail.data.result });
					this.sendPushMessage(this.state.fetchedUser ? 'Привет, ' + this.state.fetchedUser.first_name  + '!' : 'Здравствуйте!');
					break;
				case 'VKWebAppDenyNotificationsResult':
					this.setState({ allowNotification: e.detail.data.disabled });
					break;
				case 'VKWebAppCallAPIMethodResult':
					if (e.detail.data.request_id === '49test') {
						if (e.detail.data.status) {
							console.log("Message send");
						}
						else {
							console.log(e.detail.data.error);
						}
					}
					break;
				case 'VKWebAppOpenPayFormResult':
					if (e.detail.data.status) {
						this.setState({ showResult: true });
					}
					break;
				default:
					console.log(e.detail);
			}
		});
		connect.send('VKWebAppGetClientVersion');
		connect.send('VKWebAppGetUserInfo');
	}

	getGeodata = () => {
		connect.send('VKWebAppGetGeodata');
	}

	getNotifications = () => {
		if (this.state.allowNotification) {
			connect.send('VKWebAppDenyNotifications');
		} 
		else {
			connect.send('VKWebAppAllowNotifications');
		}
	}

	sendPushMessage = (message) => {
		connect.send('VKWebAppCallAPIMethod', {
			method: 'notifications.sendMessage',
			request_id: '49test',
			params: {
				user_ids: this.state.fetchedUser.id,
				message: message,
				v: 5.95,
				access_token: 'dc885af2dc885af2dc885af258dce29991ddc88dc885af280614792cae46a64cc772be7'
			}
		});
	}

	scanQR = () => {
		connect.send('VKWebAppOpenQR');
	}

	getTaptic = () => {
		connect.send('VKWebAppTapticNotificationOccurred', { type: 'success' });
	}

	controlFlashlight = () => {
		if (this.state.turnFlashlight) {
			connect.send('VKWebAppFlashSetLevel', { level: 0 });
			this.setState({ turnFlashlight: false });
		}
		else {
			connect.send('VKWebAppFlashSetLevel', { level: 1 });
			this.setState({ turnFlashlight: true });
		}
	}

	feedPersik = () => {
		connect.send('VKWebAppOpenPayForm', {
			app_id: 6996835,
			action: 'pay-to-user',
			params: {
				amount: 1,
				description: 'На корм Персику',
				user_id: 267589777
			}
		});
	}

	go = (e) => {
		this.setState({ showResult: false });
		this.setState({ activePanel: e.currentTarget.dataset.to });
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Welcome id="welcome" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Start id="start" go={this.go} />
				<Registration id="registration" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Geolocation id="geolocation" showResult={this.state.showResult} getGeodata={this.getGeodata} geodata={this.state.geodata} go={this.go} />
				<Notification id="notification" getNotifications={this.getNotifications} allowNotification={this.state.allowNotification} go={this.go} />
				<Smartphone id="smartphone" platform={this.state.platform} scanQR={this.scanQR} getTaptic={this.getTaptic} controlFlashlight={this.controlFlashlight} turnFlashlight={this.state.turnFlashlight} go={this.go} />
				<Monetization id="monetization" showResult={this.state.showResult} feedPersik={this.feedPersik} go={this.go} />
				<Business id="business" go={this.go} />
				<Contacts id="contacts" go={this.go} />
			</View>
		);
	}
}

export default App;