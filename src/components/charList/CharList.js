import "./charList.scss";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Abyss from "../../resources/img/abyss.jpg";

class CharList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charList: [],
      loading: true,
      error: false,
    };
  }
  marvelService = new MarvelService();
  componentDidMount() {
    this.updateCharList();
  }
  onCharLoaded = (charList) => {
    this.setState({ charList, loading: false });
  };
  updateCharList = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharLoaded)
      .catch(this.onError);
  };
  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };
  renderCharList = (charArray) => {
    /**char__item_selected */
    let imgStyleCover = { objectFit: "cover" };

    let imgStyleContain = { objectFit: "contain" };

    const cahrs = charArray.map((el) => {
      return (
        <li
          className="char__item"
          key={el.id}
          onClick={() => this.props.onCharSelected(el.id)}
        >
          <img
            src={el.thumbnail}
            alt={el.name}
            style={
              el.thumbnail ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                ? imgStyleContain
                : imgStyleCover
            }
          />
          <div className="char__name">{el.name}</div>
        </li>
      );
    });
    return <ul className="char__grid">{cahrs}</ul>;
  };

  render() {
    const { charList, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? this.renderCharList(charList) : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
