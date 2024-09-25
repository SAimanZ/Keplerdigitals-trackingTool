import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

import History1 from './history1';
import HistorySmallScreen from './historyMobileView';
import AttributeSmallScreen from './attributeSmallScreen';
import Attribute from './attribute';
import { Pagination } from '@mui/material';

const trackAtribute = ({ tracking }) => {
  const basicData = [
    {
      id: 'basic1',
      title: 'Attributes'
    }
  ];
  const history1 = [
    {
      id: 'basic1',
      title: 'History 1'
    }
  ];
  const cardsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = tracking?.historyArray?.slice(indexOfFirstCard, indexOfLastCard);
  let createdBy;
  let createdByUser;
  let createdAt;

  if (tracking?.historyArray?.length) {
    createdBy = tracking?.historyArray[0]?.updator;
    createdByUser = tracking?.historyArray[0]?.updatorUser;
    createdAt = tracking?.historyArray[0]?.blockTimestamp;
  } else {
    createdBy = tracking?.activity[tracking?.activity?.length - 1]?.minter;
    createdByUser = tracking?.activity[tracking?.activity?.length - 1]?.minterUser;
    createdAt = tracking?.activity[tracking?.activity?.length - 1]?.blockTimestamp;
  }

  // const filterLocation = tracking.nft.NFTMetaData.find((d) => d.display_type === 'Location' && d.primaryLocation === true);

  return (
    <Grid container-fluid spacing={gridSpacing} sx={{ margin: '0 15px' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} sx={{ padding: '0 02px 0 0px' }}>
          <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
            <AttributeSmallScreen
              tracking={tracking?.nft?.attributes}
              data={basicData}
              createdBy={createdBy}
              createdByUser={createdByUser}
              createdAt={createdAt}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Attribute
              tracking={tracking?.nft?.attributes}
              data={basicData}
              createdBy={createdBy}
              createdByUser={createdByUser}
              createdAt={createdAt}
            />
          </Grid>
          {tracking != undefined &&
            tracking?.historyArray &&
            currentCards.map((card) => (
              <>
                <Grid mt={2} mb={2} item xs={12} md={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                  <HistorySmallScreen
                    tracking={card?.historyArray}
                    updater={card?.updator}
                    updaterUser={card?.updatorUser}
                    blockTimestamp={card?.blockTimestamp}
                    Proof={card?.proofOfAuthenticityArray}
                    data={history1}
                    history={card?.historyNo}
                  />
                </Grid>
                <Grid mt={2} mb={2} item xs={12} md={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <History1
                    tracking={card?.historyArray}
                    updater={card?.updator}
                    updaterUser={card?.updatorUser}
                    blockTimestamp={card?.blockTimestamp}
                    Proof={card?.proofOfAuthenticityArray}
                    data={history1}
                    history={card?.historyNo}
                  />
                </Grid>
              </>
            ))}
          {tracking?.historyArray?.length > 5 && (
            <Pagination
              sx={{
                float: 'right',
                '.MuiPaginationItem-page.Mui-selected': {
                  backgroundColor: '#000',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#000',
                    opacity: 0.8
                  }
                }
              }}
              count={Math.ceil(tracking?.historyArray?.length / cardsPerPage)}
              onChange={(event, value) => setCurrentPage(value)}
              page={currentPage}
            />
          )}
        </Grid>
        {/* <Grid item xs={12} sm={6} md={6}>
          <Form location={filterLocation} />
        </Grid> */}
      </Grid>
    </Grid>
  );
};
export default trackAtribute;
