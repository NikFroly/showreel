import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import persikHide from '../img/Persik_hide.png';
import './Geolocation.css';

function ChangeContent(props) {
	if (props.showResult) {
		return (
			<main>
				<section className="images_geo_map">
					<div className="StaticMap" style={{ backgroundImage: 'url(https://static-maps.yandex.ru/1.x/?ll=' + props.geodata.lng + ',' + props.geodata.lat + '&size=450,450&z=16&l=map&pt=' + props.geodata.lng + ',' + props.geodata.lat + ',org)' }} />
				</section>
				<section className="controls_geo_map">
					<Button size="xl" level="secondary" onClick={props.go} data-to="notification">
						К другим фишкам
					</Button>
				</section>
			</main>
		);
	}
	else {
		return (
			<main>
				<section className="images_geo">
					<img className="PersikHide" src={persikHide} alt="Hide?" />
				</section>
				<section className="messages_geo">
					<article className="font_headline">
						Геолокация
					</article>
					<article className="mes_geo_0">
						Мы можем узнать больше информации<br />
						и использовать это в сервисе,<br />
						если ты позволишь.<br />
						Например, твоё местоположение.
					</article>
				</section>
				<section className="controls_geo">
					<Button size="xl" level="secondary" onClick={props.getGeodata}>
						Найти меня на карте
					</Button>
					<Button className="controls_skip" level="tertiary" onClick={props.go} data-to="notification">
						К другим фишкам
					</Button>
				</section>
			</main>
		);
	}
}

const Geolocation = ({ id, showResult, getGeodata, geodata, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first"></div>
			<div className="Rectangle --second"></div>
			<div className="Rectangle --third"></div>
			<div className="Rectangle --fourth"></div>
		</section>
		<section className="content">
			<header></header>
			<ChangeContent showResult={showResult} getGeodata={getGeodata} geodata={geodata} go={go} />
			<footer>
				<div className="page_label" onClick={go} data-to="welcome"></div>
				<div className="page_label" onClick={go} data-to="start"></div>
				<div className="page_label" onClick={go} data-to="registration"></div>
				<div className="page_label --current"></div>
				<div className="page_label" onClick={go} data-to="notification"></div>
				<div className="page_label" onClick={go} data-to="smartphone"></div>
				<div className="page_label" onClick={go} data-to="monetization"></div>
				<div className="page_label" onClick={go} data-to="business"></div>
				<div className="page_label" onClick={go} data-to="contacts"></div>
			</footer>
		</section>
	</div>
);

Geolocation.propTypes = {
	id: PropTypes.string.isRequired,
	showResult: PropTypes.bool.isRequired,
	getGeodata: PropTypes.func.isRequired,
	geodata: PropTypes.shape({
		lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	}),
	go: PropTypes.func.isRequired
};

export default Geolocation;