import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Card from '../Card/Card';
import styles from './SearchResults.scss';

class SearchResults extends React.Component{

  static propTypes = {
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
    searchString: PropTypes.string,
    match: PropTypes.object,
    params: PropTypes.object,
  }

  componentWillMount(){
    this.props.changeSearchString(this.props.match.params.searchString);
  }

  render(){
    const {cards} = this.props;

    return(
      <section className={styles.section}>
        <Container>
          <div className={styles.component}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;
