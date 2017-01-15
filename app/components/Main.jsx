var React = require('react');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <div className="">
                    <div className="">
                        <p>Main.jsx Rendered</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;
