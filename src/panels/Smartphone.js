import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import spotMobile from '../img/Spot_mobile.png';
import './Smartphone.css';

function ChangeContent(props) {
	switch (props.platform) {
		case 'ios':
			return (
				<section className="messages_1_sp">
					<article className="font_headline --fh_sp">
						Органы смартфона
					</article>
					<article className="mes_0_sp">
						Неплохо, не правда ли?
					</article>
					<article className="mes_1_sp">
						У сервисов есть доступ к основным органам смартфона.
					</article>
					<article className="mes_2_sp">
						В сервисе можно:
					</article>
					<Button className="controls_cam --orange" size="xl" level="secondary" onClick={props.scanQR}>
						Открыть камеру
					</Button>
					<Button className="controls_vib --orange" size="xl" level="secondary" onClick={props.getTaptic}>
						Повибрировать
					</Button>
					<Button className="controls_light --orange" size="xl" level="secondary" onClick={props.controlFlashlight}>
						{`${ props.turnFlashlight ? 'Выключить фонарик' : 'Включить фонарик' }`}
					</Button>
				</section>
			);
		case 'android':
			return (
				<section className="messages_1_sp">
					<article className="font_headline --fh_sp">
						Органы смартфона
					</article>
					<article className="mes_0_sp">
						Неплохо, не правда ли?
					</article>
					<article className="mes_1_sp">
						У сервисов есть доступ к основным органам смартфона.
					</article>
					<article className="mes_2_sp">
						В сервисе можно:
					</article>
					<Button className="controls_cam_android --orange" size="xl" level="secondary" onClick={props.scanQR}>
						Открыть камеру
					</Button>
					<Button className="controls_light_android --orange" size="xl" level="secondary" onClick={props.controlFlashlight}>
						{`${ props.turnFlashlight ? 'Выключить фонарик' : 'Включить фонарик' }`}
					</Button>
				</section>
			);
		default:
			return (
				<section className="messages_1_sp">
					<div className="messages_1_info_sp">
						<img className="SpotMobile" src={spotMobile} alt="Mobile" />
						<article className="font_headline">
							Органы смартфона
						</article>
						<article className="mes_0_web_sp">
							Неплохо, не правда ли?
						</article>
						<article className="mes_1_web_sp">
							У сервисов есть доступ к основным органам смартфона.
						</article>
					</div>
					<div className="list list_sp">
						<article>
							В сервисе можно:
						</article>
						<ul className="mes_list_sp">
							<li>Открыть камеру</li>
							<li>Задействовать Taptic Engine</li>
							<li>Управлять вспышкой</li>
						</ul>
					</div>
				</section>
			);
	}
}

const Smartphone = ({ id, platform, scanQR, getTaptic, controlFlashlight, turnFlashlight, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first"></div>
			<div className="Rectangle --second"></div>
			<div className="Rectangle --third"></div>
			<div className="Rectangle --fourth"></div>
		</section>
		<section className="content">
			<header></header>
			<main>
				<ChangeContent platform={platform} scanQR={scanQR} getTaptic={getTaptic} controlFlashlight={controlFlashlight} turnFlashlight={turnFlashlight} />
				<section className="messages_2_sp">
					<article>
						и многое другое!
					</article>
					<article className="mes_3_sp">
						Кстати, камера может сканировать QR-коды.
					</article>
				</section>
				<section className="controls_2_sp">
					<Button size="xl" level="secondary" onClick={go} data-to="monetization">
						Давай к делу
					</Button>
				</section>
			</main>
			<footer>
				<div className="page_label" onClick={go} data-to="welcome"></div>
				<div className="page_label" onClick={go} data-to="start"></div>
				<div className="page_label" onClick={go} data-to="registration"></div>
				<div className="page_label" onClick={go} data-to="geolocation"></div>
				<div className="page_label" onClick={go} data-to="notification"></div>
				<div className="page_label --current"></div>
				<div className="page_label" onClick={go} data-to="monetization"></div>
				<div className="page_label" onClick={go} data-to="business"></div>
				<div className="page_label" onClick={go} data-to="contacts"></div>
			</footer>
		</section>
	</div>
);

Smartphone.propTypes = {
	id: PropTypes.string.isRequired,
	platform: PropTypes.string.isRequired,
	scanQR: PropTypes.func.isRequired,
	getTaptic: PropTypes.func.isRequired,
	controlFlashlight: PropTypes.func.isRequired,
	turnFlashlight: PropTypes.bool.isRequired,
	go: PropTypes.func.isRequired
};

export default Smartphone;