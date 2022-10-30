import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 2,
    author: {
      avatarUrl: 'https://lh3.googleusercontent.com/a/ALm5wu0JR_X8sJ2iXnzGWdXlyjpsE-wX1NOQ8jewKE08Dw=s288-p-rw-no',
      name: 'Marcio Jr',
      role: 'Student'
    },
    content: [
      { type: 'paragraph', content: 'Oi Diluc!' },
      { type: 'paragraph', content: 'Estou aprendendo programar pra comprar ração boa pra voçê, olha meu perfil onde estou postando as coisas!!' },
      { type: 'link', content: 'https://github.com/Marcio1505' },
    ],
    publishedAt: new Date('2022-05-15 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
