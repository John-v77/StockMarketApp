import React from 'react';

function MyList(props) {
    return (
        <div class="component-container-myList">
            <h3> My List </h3>
            

            
            {/* First Row */}
            <div class="Table-head-myList">
                <div>add item</div>
                <div>sort button</div>
            </div>         
            <div class='list-row-myList' class="flex-line">
                <div>
                    button on click lets you drag the list item in place you want
                </div>
                <div>
                    <p>Symbol</p>
                    <p>Stock name</p>
                </div>
                <div>
                    <p>Chart</p>
                </div>
                <div>
                    <p>Price</p><span><p>% change</p></span>
                </div>
                <div> button delete item</div>
                <div></div>

            </div>
        </div>
    );
}

export default MyList;