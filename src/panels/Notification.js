import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@vkontakte/vkui';
import pushExample from '../img/Push_example.png';
import './Notification.css';

const Notification = ({ id, sendPushMessage, allowNotification, go }) => (
	<div className="Page" id={id}>
		<section className="background_element">
			<div className="Rectangle --first --st_nt"></div>
			<div className="Rectangle --second --nd_nt"></div>
			<div className="Rectangle --third --rd_nt"></div>
			<div className="Rectangle --fourth --th_nt"></div>
		</section>
		<section className="content">
			<header></header>
			<main>
				<section className="messages_nt_1">
					<article className="font_headline --fh_nt">
						Push-уведомления
					</article>
					<article className="mes_nt_0">
						Если сервис интересный, то можно подписывать пользователя на push-уведомления и сообщать о новых событиях.
					</article>
				</section>
				<section className="images_nt">
					<img className="PushExample" src={pushExample} alt="Example of push-messages" />
				</section>
				<section className="messages_nt_2">
					<article>
						Оно появится даже на заблокированном экране устройства
					</article>
				</section>
				<section className="controls_nt">
					<Button size="xl" level="secondary" onClick={sendPushMessage}>
						{`${ allowNotification ? 'Выключить push' : 'Включить push' }`}
					</Button>
					<Button className="controls_skip --cs_nt" level="tertiary" onClick={go} data-to="smartphone">
						К другим фишкам
					</Button>
				</section>
			</main>
			<footer>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label --current"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
				<div className="page_label"></div>
			</footer>
		</section>
	</div>
);

Notification.propTypes = {
	id: PropTypes.string.isRequired,
	sendPushMessage: PropTypes.func.isRequired,
	allowNotification: PropTypes.bool.isRequired,
	go: PropTypes.func.isRequired
};

export default Notification;