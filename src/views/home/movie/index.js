import React from 'react';
import http from '../../../utils/http';
import Header from '../../../common/herder';
import { NavLink } from 'react-router-dom';
import './style.less';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    }
  }
  render() {
    const { movieList } = this.state
    return (
      <div className="movie">
        <Header title="猫眼电影"></Header>

        <section className="topbar">
          <div className="city-entry">
            <span className="city-name">深圳</span><i className="iconfont icon-down"></i>
          </div>

          <div className="switch-hot">
            <NavLink className="hot-item" to="/movie">正在热映</NavLink>
            <NavLink className="hot-item" to="/movie/commonsony">即将上映</NavLink>
          </div>
          <i className="iconfont icon-sousuo"></i>
        </section>

        <div className="page">
          <div className="page-wrap">
          {
            movieList.map(item => {
              return(
                <div className="item" key={ item.id }>
                  <div className="main-block">
                    <div className="default-img-bg">
                      <img src={ item.img.replace('w.h', '128.180') } alt=""/>
                    </div>
                    <div className="mb-outline-b content-wrapper">
                      <div className="column content">
                        <div className="box-flex movie-title">
                          <div className="title line-ellipsis ">{ item.nm }</div>
                          <span className={`version ${item.version}`}></span>
                          {
                            item.preShow ? (<span className="pre-show"></span>) : ''
                          }
                        </div>
                        <div className="detail column">
                          {
                            item.showst === 4 ? (
                              <div className="wantsee line-ellipsis">
                              <span className="person">{ item.wish }</span>
                              <span className="p-suffix">人想看</span>
                              </div>
                            ) : (
                                  <div className="score line-ellipsis">
                                    <span className="score-suffix">观众评 </span>
                                    <span className="grade">{ item.sc }</span>
                                  </div>
                                )

                          }
                          <div className="actor line-ellipsis">主演: { item.star}</div>
                          <div className="show-info line-ellipsis">{ item.showInfo }</div>

                        </div>
                      </div>

                      <div className="button-block" data-id="1254277">

                        <div className={`btn ${item.showst === 4 ? 'pre' : ''}`} data-id="1254277"><span className="fix">{ item.showst === 4 ? '预售' : '购票' }</span></div>

                      </div>

                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>

      </div>
    )
  }

  componentDidMount() {
    http.get('/ajax/movieOnInfoList?token=').then(async res => {
      console.log(res);

      await this.setState({
        movieList: res.movieList
      })
    })
  }
}

export default Movie;
