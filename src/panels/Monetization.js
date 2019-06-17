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
				<section className="images_mon_paid">
					<article className="PersikGlad_container">
						<img className="PersikGlad" src={persikGlad} alt="Glad cat" />
					</article>
				</section>
				<section className="messages_mon_paid">
					<article className="font_headline">
						Персик накормлен!
					</article>
				</section>
				<section className="controls_mon_paid">
					<Button size="xl" level="secondary" onClick={props.go} data-to="contacts">
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
					<article className="mes_mon_0">
						На сервисах можно зарабатывать деньги.<br /> 
						В них можно встраивать рекламу и покупки через VK Pay.
					</article>
					<article className="mes_mon_1">
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
					<Button className="controls_skip" level="tertiary" onClick={props.go} data-to="contacts">
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
			<div className="Rectangle --second --st_mon"></div>
			<div className="Rectangle --second --nd_mon"></div>
			<div className="Rectangle --third --rd_mon"></div>
			<div className="Rectangle --fourth --th_mon"></div>
		</section>
		<section className="content">
			<header></header>
			<ChangeContent showResult={showResult} feedPersik={feedPersik} go={go} />
			<footer>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label --current"></div>
				<div className="page_label"></div>
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