import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        console.log("THIS", this)
        return (
            <table>{this.props.data.map((o) => {
                return (
                    <tr>
                        <th>{o.name}</th>
                        <th>{o.anh}</th>
                        <th>{o.age}</th>
                    </tr>

                )
            })}

            </table>
        );
    }
}

export default ListItem;
