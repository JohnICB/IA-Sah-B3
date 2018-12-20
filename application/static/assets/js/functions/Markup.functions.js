
/* ********Markup creation functions******** */

export function createCardMarkup( strategyDetails ) {
  // Create Bootstrap card markup
  // https://getbootstrap.com/docs/4.1/components/card/#using-grid-markup
  // .card element
  let card = document.createElement('div');
  card.classList = 'card';

  // .card-body container
  let cardBody = document.createElement('div');
  cardBody.classList = 'card-body';

  // .card-title 
  let cardTitle = document.createElement('h2');
  cardTitle.classList = 'card-title';
  cardTitle.innerText = strategyDetails.strategy;

  // .card-text
  let cardText = document.createElement('p');
  cardText.classList = 'card-text';
  cardText.innerText = strategyDetails.description;

  // .btn.btn-primary link to documentation
  let link = document.createElement('a');
  link.classList = 'btn btn-primary';
  link.innerText = 'Documentation';
  link.href = strategyDetails.documentation;

  // append everything to .card-body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(link);

  // append .card-body to .card container
  card.appendChild(cardBody);

  return card;
}

export function createListGroupItemMarkup( strategyDetails ) {
  // link
  let link = document.createElement('a');
  link.classList = 'list-group-item list-group-item-action strategy';

  // .container-fluid
  let container = document.createElement('div');
  container.classList = 'container-fluid';

  // .row
  let row = document.createElement('div');
  row.classList = 'row';
  
  // .strategy__info.col
  let strategyInfo = document.createElement('div');
  strategyInfo.classList = 'strategy__info col p-0';
  
  // strategy .name
  let strategyName = document.createElement('h5');
  strategyName.classList = 'mb-1 name';
  strategyName.innerText = strategyDetails.strategy;
  
  // strategy .desc
  let strategyDesc = document.createElement('p');
  strategyDesc.classList = 'mb-1 desc';
  strategyDesc.innerText = strategyDetails.description;

  // .col-2.align-self-center
  let col = document.createElement('div');
  col.classList = 'col-2 align-self-center';

  // .strategy-move
  let strategyMove = document.createElement('span');
  strategyMove.classList = 'alert alert-success strategy__move';
  strategyMove.id = `js-move-${strategyDetails.strategy}`;

  // append .name & .desc to .strategy__info
  strategyInfo.appendChild(strategyName);
  strategyInfo.appendChild(strategyDesc);

  // loader
  // markup here https://loading.io/css/
  let loader = document.createElement('div');
  loader.classList = 'lds-ellipsis';
  loader.id = `js-loader-${strategyDetails.strategy}`
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let div3 = document.createElement('div');
  let div4 = document.createElement('div');

  loader.appendChild(div1);
  loader.appendChild(div2);
  loader.appendChild(div3);
  loader.appendChild(div4);

  // append .strategy-move to .col-2.align-self-center
  col.appendChild(strategyMove);
  col.appendChild(loader);

  // create .consecutive-moves button here
  
  // append .strategy__info & .col-2.align-self-cente
  // to .row
  row.appendChild(strategyInfo);
  row.appendChild(col);
  // append .consecutive-moves button to .row here
  
  // append .row to .container-fluid
  container.appendChild(row);

  // append .container to link
  link.append(container);

  return link;
}
