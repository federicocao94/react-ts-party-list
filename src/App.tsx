import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      url: "https://static.sky.it/editorialimages/0bd761c74df5f195fabe53b10639b80d36754205/skysport/it/nba/2023/01/19/nba-risultati-notte-19-gennaio-video/lebron_james_lakers.jpg"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
