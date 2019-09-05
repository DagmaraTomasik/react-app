import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
    column: PropTypes.array,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image} />
        <div className={styles.columns}>
          <Column title={'Clean the house'} />
          <Column title={'Cooking'} />
          <Column title={'Walk the dog'} />
        </div>
      </section>
    )
  }
}

export default List;
