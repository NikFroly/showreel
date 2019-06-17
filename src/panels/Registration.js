import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import spotHI from '../img/Spot_HI.png';
import './Registration.css';

const Registration = ({ id, fetchedUser, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first --st_reg"></div>
			<div className="Rectangle --second --nd_reg"></div>
			<div className="Rectangle --third --rd_reg"></div>
			<div className="Rectangle --fourth --th_reg"></div>
		</section>
		<section className="content">
			<header></header>
			<main>
				<section className="images_reg">
					<img className="SpotHI" src={spotHI} alt="HI!" />
				</section>
				<section className="messages_reg">
					<article className="font_headline">
						Отсутствие регистрации
					</article>
					<article className="messages_reg_blue">
						В сервисах не нужно регистрироваться.<br />
						Ты уже зарегистрирован.<br />
						Мы знаем о тебе то, что ты не скрываешь<br />от ВКонтакта:
					</article>
					<article className="messages_reg_weight">
						Тебя зовут {`${ fetchedUser ? fetchedUser.first_name + ' ' + fetchedUser.last_name : 'Юзер' }`},
						твоя дата рождения {`${ fetchedUser && fetchedUser.bdate ? fetchedUser.bdate : 'скрыта' }`},
						а живешь {`${ fetchedUser ? 'в ' + fetchedUser.city.title : 'на планете земля' }`}.<br />
						Как видишь, доступна только разрешённая тобой информация.
					</article>
				</section>
				<section className="controls_reg">
					<Button size="xl" level="secondary" onClick={go} data-to="geolocation">
						Это удобно
					</Button>
				</section>
			</main>
			<footer>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label --current"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
			</footer>
		</section>
	</div>
);

Registration.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string
		}),
		bdate: PropTypes.string 
	}),
	go: PropTypes.func.isRequired
};

export default Registration;