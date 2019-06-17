import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import spotRelax from '../img/Spot_relax.png';
import './Start.css';

const Start = ({ id, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first --st_st"></div>
			<div className="Rectangle --second --nd_st"></div>
			<div className="Rectangle --third --rd_st"></div>
			<div className="Rectangle --fourth --th_st"></div>
		</section>
		<section className="content">
			<header></header>
			<main>
				<section className="images_st">
					<img className="SpotRelax" src={spotRelax} alt="Relax" />
				</section>
				<section className="messages_st">
					<article className="font_headline">
						Мгновенный запуск
					</article>
					<article className="mes_st_0">
						Обратили внимание, как легко сюда попасть?<br />
						Не нужно ничего скачивать и устанавливать.<br />
						Волшебство, не правда ли?
					</article>
				</section>
				<section className="controls_st">
					<Button size="xl" level="secondary" onClick={go} data-to="registration">
						Хм, и правда
					</Button>
				</section>
			</main>
			<footer>
				<div className="page_label"></div>
				<div className="page_label --current"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
			</footer>
		</section>
	</div>
);

Start.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Start;