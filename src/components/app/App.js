import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/vision.png";

class App extends Component {
  state = {
    seslectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({
      seslectedChar: id,
    });
  };
  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <AppHeader />
        </ErrorBoundary>
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="char__content">
            <CharList onCharSelected={this.onCharSelected} />

            <ErrorBoundary>
              <CharInfo charId={this.state.seslectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
