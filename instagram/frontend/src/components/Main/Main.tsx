import React from 'react';

import { MainPostItem } from '../../types/post';

import styles from './Main.module.scss';

const Main: React.FC = () => {
  const mock: MainPostItem[] = [
    {
      id: 'asdfweqr',
      author: { name: 'juve', profile_img: 'https://miro.medium.com/max/437/1*x0FqJnGnq3y71bJAlU-8aw.jpeg' },
      images: ['https://miro.medium.com/max/437/1*x0FqJnGnq3y71bJAlU-8aw.jpeg'],
      content: 'asdf',
      comment_count: 5,
      like: 2020,
      created_at: '2020',
    },
    {
      id: 'xvcxafas',
      author: { name: 'juve', profile_img: 'https://github' },
      images: [],
      content: 'asdf',
      comment_count: 5,
      like: 2020,
      created_at: '2020',
    },
  ];
  return (
    <main className={styles.main}>
      <section className={styles.postListSection}>
        <ul className={styles.storiesWrapper}>dummy</ul>
        <ul className={styles.postList}>
          {mock.map((item) => (
            <li className={styles.postListItem} key={item.id}>
              <article>{item.content}</article>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.sidebar}>dummy</section>
    </main>
  );
};

export default Main;
