import Modal from "components/Modal/Modal";
import { useState } from "react";
import css from './TestModal.module.scss'

export default function TestModal() {
const [modalActive, setModalActive] = useState(true)

  return (
    <div className={css['test']}>
      <h1>modal!!!!</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nostrum illum. Accusantium necessitatibus, fugit, natus nobis ad aliquid exercitationem doloribus vel voluptas earum veritatis quo nihil, debitis voluptatibus voluptates aperiam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nostrum illum. Accusantium necessitatibus, fugit, natus nobis ad aliquid exercitationem doloribus vel voluptas earum veritatis quo nihil, debitis voluptatibus voluptates aperiam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nostrum illum. Accusantium necessitatibus, fugit, natus nobis ad aliquid exercitationem doloribus vel voluptas earum veritatis quo nihil, debitis voluptatibus voluptates aperiam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nostrum illum. Accusantium necessitatibus, fugit, natus nobis ad aliquid exercitationem doloribus vel voluptas earum veritatis quo nihil, debitis voluptatibus voluptates aperiam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nostrum illum. Accusantium necessitatibus, fugit, natus nobis ad aliquid exercitationem doloribus vel voluptas earum veritatis quo nihil, debitis voluptatibus voluptates aperiam!</p>

      <br />

      <button onClick={() => setModalActive(true)}>відкрити модалку</button>

     <Modal active={modalActive} setActive={setModalActive}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sit eum explicabo, enim veniam mollitia ratione perferendis beatae! Temporibus in unde mollitia reiciendis voluptates vitae alias sit, optio non tenetur?</p>
     </Modal>
    </div>
  );
}
