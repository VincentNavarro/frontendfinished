import React from 'react'
import PropTypes from 'prop-types'

function calculateTotal(items, type) {
    return items.reduce((total, item) => total += item[type], 0)
}

function formatCurrency(amount) {
    return amount.toFixed(2);
}
function OrderDetailsTable({ data, actions }) {
    const { customerName, items } = data;
    const { clearSelected } = actions;
    const totalQuantity = calculateTotal(items, 'quantity');
    const totalPrice = calculateTotal(items, 'price')/100;

    return (
        <div>
            <div className="headerContent">
                <h1>{customerName}'s Order</h1>
                <button
                    type="button"
                    className="backButton"
                    onClick={clearSelected}
                >
                    Back To List
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.size || 'n/a'}</td>
                                <td>{item.quantity}</td>
                                <td>{`$${formatCurrency(item.price/100)}`}</td>
                            </tr>
                    ))}

                    <tr>
                        <td />
                        <td />
                        <td>{totalQuantity}</td>
                        <td>{'$'+formatCurrency(totalPrice)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

OrderDetailsTable.propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default OrderDetailsTable

