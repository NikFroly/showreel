import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import './Smartphone.css';

function ChangeContent(props) {
	if (props.iOS) {
		return (
			<section className="controls_sp_1">
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
	}
	else {
		return (
			<section className="controls_sp_1">
				<Button className="controls_cam_notiOS --orange" size="xl" level="secondary" onClick={props.scanQR}>
					Открыть камеру
				</Button>
				<Button className="controls_light_notiOS --orange" size="xl" level="secondary" onClick={props.controlFlashlight}>
					{`${ props.turnFlashlight ? 'Выключить фонарик' : 'Включить фонарик' }`}
				</Button>
			</section>
		);
	}
}

const Smartphone = ({ id, iOS, scanQR, getTaptic, controlFlashlight, turnFlashlight, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first --st_sp"></div>
			<div className="Rectangle --second --nd_sp"></div>
			<div className="Rectangle --third --rd_sp"></div>
			<div className="Rectangle --fourth --th_sp"></div>
		</section>
		<section className="content">
			<header></header>
			<main>
				<section className="messages_sp_1">
					<article className="font_headline --fh_sp">
						Органы смартфона
					</article>
					<article className="mes_sp_0">
						Неплохо, не правда ли?
					</article>
					<article className="mes_sp_1">
						У сервисов есть доступ к основным органам смартфона
					</article>
					<article className="mes_sp_2">
						В сервисе можно:
					</article>
				</section>
				<ChangeContent iOS={iOS} scanQR={scanQR} getTaptic={getTaptic} controlFlashlight={controlFlashlight} turnFlashlight={turnFlashlight} />
				<section className="messages_sp_2">
					<article>
						и многое другое!
					</article>
					<article className="mes_sp_3">
						Кстати, камера может сканировать QR-коды.
					</article>
				</section>
				<section className="controls_sp_2">
					<Button size="xl" level="secondary" onClick={go} data-to="monetization">
						Давай к делу
					</Button>
				</section>
			</main>
			<footer>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label --current"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
			</footer>
		</section>
	</div>
);

Smartphone.propTypes = {
	id: PropTypes.string.isRequired,
	iOS: PropTypes.bool.isRequired,
	scanQR: PropTypes.func.isRequired,
	getTaptic: PropTypes.func.isRequired,
	controlFlashlight: PropTypes.func.isRequired,
	turnFlashlight: PropTypes.bool.isRequired,
	go: PropTypes.func.isRequired
};

export default Smartphone;