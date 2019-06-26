import React from 'react';
import axios from 'axios';
import base64 from 'react-native-base64';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';
import './backend/callback.php';
import './backend/public_key';

import PayScript from './backend/payScript.php';

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
			iOS: false,
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
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				case 'VKWebAppGetClientVersionResult':
					if (e.detail.data.platform === "ios") {
						this.setState({ iOS: true });
					}
					else {
						this.setState({ iOS: false });
					}
					break;
				case 'VKWebAppGeodataResult':
					this.setState({
						geodata: {
							lat: e.detail.data.lat,
							lng: e.detail.data.long
						}
					});
					this.setState({ showResult: true });
					break;
				case 'VKWebAppAllowNotificationsResult':
					this.setState({ allowNotification: e.detail.data.result });
					this.sendPushMessage();
					break;
				case 'VKWebAppDenyNotificationsResult':
					this.setState({ allowNotification: e.detail.data.disabled });
					break;
				case 'VKWebAppGetEmailResult':
					this.setState({ email: e.detail.data.email });
					this.feedPersik();
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
					if (e.detail.data.response.status) {
						this.setState({ showResult: true });
					}
					break;
				default:
					console.log(e.detail);
			}
		});
		connect.send('VKWebAppSetViewSettings', { status_bar_style: 'light', action_bar_color: '#1F3375' });
		connect.send('VKWebAppGetUserInfo', {});
		connect.send('VKWebAppGetClientVersion', {});
	}

	getGeodata = () => {
		connect.send('VKWebAppGetGeodata', {});
	}

	getNotifications = () => {
		if (this.state.allowNotification) {
			connect.send('VKWebAppDenyNotifications', {});
		} 
		else {
			connect.send('VKWebAppAllowNotifications', {});
		}
	}

	sendPushMessage = () => {
		connect.send('VKWebAppCallAPIMethod', {
			method: 'notifications.sendMessage',
			request_id: '49test',
			params: {
				user_ids: this.state.fetchedUser.id,
				message: `${this.state.fetchedUser ? 'Привет, ' + this.state.fetchedUser.first_name  + '!' : 'Здравствуйте!'}`,
				v: 5.95,
				access_token: 'dc885af2dc885af2dc885af258dce29991ddc88dc885af280614792cae46a64cc772be7'
			}
		});
	}

	scanQR = () => {
		connect.send('VKWebAppOpenQR');
	}

	getTaptic = () => {
		connect.send('VKWebAppTapticImpactOccurred', { style: 'heavy' });
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

	getEmail = () => {
		connect.send('VKWebAppGetEmail', {});
	}

	feedPersik = () => {
		var user_id = this.state.fetchedUser.id;
		axios.get(PayScript, {
			params: {
				api: 'getOrderId',
				cource_id: 6996835,
				user_id: user_id,
				amount: 1,
				mail: this.state.email
			}
		}).then(function (response){
			var order_id = response.data.order_id;
			var amount = response.data.amount;
			var ts = + new Date();
			var merchant_data = base64.encode(JSON.stringify({"amount":amount,"currency":"RUB","order_id":order_id,"ts":ts}));
			axios.get(PayScript, {
				params: {
					api: 'getVKpaySign',
					data: merchant_data
				}
			}).then(function (response){
				merchant_data = response.data.merchant_data; 
				var merchant_sign = response.data.merchant_sign;
				var description = ' feed Persik';
				var app_data = 'amount=' + amount + 'data={"currency":"RUB","merchant_data":"' + merchant_data + '","merchant_sign":"' + merchant_sign + '","order_id":"' + order_id + '","ts":' + ts + '}description=' + description + 'merchant_id=6996835version=2';
				axios.get(PayScript, {
					params: {
						api: 'getVKpayAppSign',
						data: app_data,
						user_id: user_id
					}
				}).then(function (response) {
					connect.send('VKWebAppOpenPayForm', {
						app_id: 6996835,
						action: 'pay-to-service',
						params: {
							amount: amount,
							description: description,
							action: "pay-to-service",
							merchant_id: 3922194,
							version: 2,
							sign: response.data.app_sign,
							data: {
								currency: "RUB",
								merchant_data: merchant_data,
								merchant_sign: merchant_sign,
								order_id: order_id,
								ts: ts
							}
						}
					});
				});
			});
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
				<Smartphone id="smartphone" iOS={this.state.iOS} scanQR={this.scanQR} getTaptic={this.getTaptic} controlFlashlight={this.controlFlashlight} turnFlashlight={this.state.turnFlashlight} go={this.go} />
				<Monetization id="monetization" showResult={this.state.showResult} getEmail={this.getEmail} go={this.go} />
				<Business id="business" go={this.go} />
				<Contacts id="contacts" go={this.go} />
			</View>
		);
	}
}

export default App;