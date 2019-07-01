import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import persikHungry from '../img/Persik_hungry.png';
import persikGlad from '../img/Persik_glad.png'
import './Monetization.css';

function ChangeContent(props) {
	if (props.showResult) {
		return (
			<main>
				<section className="images_paid_mon">
					<div className="PersikGlad_container">
						<img className="PersikGlad" src={persikGlad} alt="Glad cat" />
					</div>
				</section>
				<section className="messages_paid_mon">
					<article className="font_headline">
						Персик накормлен!
					</article>
				</section>
				<section className="controls_paid_mon">
					<Button size="xl" level="secondary" onClick={props.go} data-to="business">
						Продолжить
					</Button>
				</section>
			</main>
		);
	}
	else {
		return (
			<main>
				<section className="messages_mon">
					<article className="font_headline --fh_mon">
						Монетизация
					</article>
					<article className="mes_0_mon">
						На сервисах можно зарабатывать деньги.<br /> 
						В них можно встраивать рекламу и покупки через VK Pay.
					</article>
					<article className="mes_1_mon">
						Купите Персику корм, это стоит всего 1 рубль.
					</article>
				</section>
				<section className="images_mon">
					<img className="PersikHungry" src={persikHungry} alt="Hungry cat" />
				</section>
				<section className="controls_mon">
					<Button size="xl" level="secondary" onClick={props.feedPersik} data-to="monetization">
						Купить Персику корм за 1 рубль
					</Button>
					<Button className="controls_skip" level="tertiary" onClick={props.go} data-to="business">
						Пропустить
					</Button>
				</section>
			</main>
		);
	}
}

const Monetization = ({ id, showResult, feedPersik, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first"></div>
			<div className="Rectangle --second"></div>
			<div className="Rectangle --third"></div>
			<div className="Rectangle --fourth"></div>
		</section>
		<section className="content">
			<header></header>
			<ChangeContent showResult={showResult} feedPersik={feedPersik} go={go} />
			<footer>
				<div className="page_label" onClick={go} data-to="welcome"></div>
				<div className="page_label" onClick={go} data-to="start"></div>
				<div className="page_label" onClick={go} data-to="registration"></div>
				<div className="page_label" onClick={go} data-to="geolocation"></div>
				<div className="page_label" onClick={go} data-to="notification"></div>
				<div className="page_label" onClick={go} data-to="smartphone"></div>
				<div className="page_label --current"></div>
				<div className="page_label" onClick={go} data-to="business"></div>
				<div className="page_label" onClick={go} data-to="contacts"></div>
			</footer>
		</section>
	</div>
);

Monetization.propTypes = {
	id: PropTypes.string.isRequired,
	showResult: PropTypes.bool.isRequired,
	feedPersik: PropTypes.func.isRequired,
	go: PropTypes.func.isRequired
};

export default Monetization;