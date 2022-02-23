import React,{ Component } from "react";
import {gql} from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'  

const getBooksQuery= gql`
{
    books{
        name
        id
    }
}

`




class BookList extends Component {
render () { 
    console.log(this.props)
    return (
    <div id ="main">
     <ul id="book-list"></ul>
     <li>Book name</li>
    </div>
  );}
}

export default graphql(getBooksQuery)(BookList);
