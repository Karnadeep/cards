import logo from './logo.svg';
import React, { useEffect, useState, Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css"
import './App.css';
import store from './store'
import { Provider } from "react-redux";
import PropTypes from 'prop-types'
import Cards from './Cards'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loadPosts } from './actions/posts'


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <Provider store={store}>
      <Fragment>
        <Container>
          <Card>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Container>
      </Fragment>
    </Provider>
  );
}

App.propTypes = {
  loadPosts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { loadPosts })(App);
