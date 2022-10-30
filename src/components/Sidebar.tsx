import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://www.ufrgs.br/vitrinetecnologica/wp-content/uploads/2017/10/circuit-board.jpeg"
      />

      <div className={styles.profile}>
        <Avatar src="https://lh3.googleusercontent.com/a/ALm5wu0JR_X8sJ2iXnzGWdXlyjpsE-wX1NOQ8jewKE08Dw=s288-p-rw-no" />

        <strong>Marcio jr</strong>
        <span>A New Web Developer, and a lover of printed circuits </span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
