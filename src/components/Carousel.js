import React, { Component } from 'react';
import $ from 'jquery';

class Carousel extends Component{
	render(){
		return(
			<div className="container-fluid">
				<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
					{/* Indicators */}
					<ol className="carousel-indicators">
						<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
						<li data-target="#carousel-example-generic" data-slide-to="1"></li>
						<li data-target="#carousel-example-generic" data-slide-to="2"></li>
					</ol>

					{/* Wrapper for slides */}
					<div className="carousel-inner" role="listbox">
						<div className="item active">
							<img src="https://s-media-cache-ak0.pinimg.com/originals/d7/1c/ec/d71cec6f3c59becee51942fc0da7e4f9.jpg" width="100%" />
							<div className="carousel-caption">
								Some car							</div>
						</div>
						<div className="item">
							<img src="https://i.ytimg.com/vi/4JCrgRBYUxk/maxresdefault.jpg" width="100%" />
							<div className="carousel-caption">
								Another car
							</div>
						</div>
						<div className="item">
							<img src="https://media.wired.com/photos/592681b08d4ebc5ab806a83d/master/w_1600,c_limit/Cars_Bentley_IL_BH.jpg" width="100%" />
							<div className="carousel-caption">
								More car
							</div>
						</div>
					</div>

					{/* Controls */}
					<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
						<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
						<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		)
	}
}

export default Carousel;