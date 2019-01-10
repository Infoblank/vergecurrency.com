import ExpandCollapse from 'react-expand-collapse';

export const PartnerInfo = ({ t }) => {
  const options = {
    previewHeight: '6em', // 1 line = 3em => 2 lines
    expandText: 'more',
    collapseText: 'less'
  };

  return (
    <div className="row center-xs pt-large pb">
      <div className="col-xs-10 start-xs exchanges bb">
        <div className="start-sm pb-small">
          <h2>
            {t('home:partnership.intro', {
              defaultValue: 'On our mission for mass adoption'
            })}{' '}
            <span className="hidden-xs">
              <br />
            </span>
            {t('home:partnership.subintro', {
              defaultValue: 'we are supported by the following partners:'
            })}
          </h2>
        </div>
        <div className="partners-grid">
          <div>
            <a href="https://net-cents.com/">
              <img src="/static/img/partners/netcents.png" alt="netcents" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.netcents', {
                defaultValue: `NetCents is a next-generation online payment processing platform,
                  offering consumers and merchants online services for managing
                  electronic payments. The Company is focused on capturing the
                  migration from cash to digital currency by utilizing innovative
                  Blockchain Technology to provide payment solutions that are simple
                  to use, secure and worry-free. NetCents has partnered with Verge
                  along with its financial partners, mobile operators, exchanges,
                  etc., to streamline the user experience of transacting online.`
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.mindgeek.com/">
              <img src="/static/img/partners/mindgeek.png" alt="mindgeek" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.mindgeek', {
                defaultValue: `MindGeek is a global industry-leading information technology firm
                headquartered in Luxembourg, with offices in Nicosia, London,
                Miami, Montreal and Los Angeles. MindGeek continues to drive the
                state of technology forward, developing industry-leading solutions
                enabling faster, more efficient delivery of content every second
                to millions of customers worldwide.`
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.plaak.com/">
              <img src="/static/img/partners/plaak.png" alt="plaak" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.plaak', {
                defaultValue: `PLAAK is a Singaporean based Software Development & Blockchain Technology 
                Company with a suite of high-tech and easy to use applications for mobile and desktop 
                computer devices. Developing useful everyday applications that can store, transact and 
                also trade digital currencies encourages global use and wider spread adoption. 
                One such product, is the PLAAK Core Card a sleek and easy to carry and use device, 
                enabling Core Card owners to safely store, transact and receive digital currencies anywhere.`
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://thecryptoden.io/">
              <img src="/static/img/partners/thecryptoden.png" alt="cryptoden" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.thecryptoden', {
                defaultValue: `The Crypto Den is a multi-platform service aimed at mass adoption through education.
                The Crypto Den's goal is being a one stop shop, to make crypto less cryptic for the public whilst facilitating 
                a peer-to-peer crypto marketplace, as well as presenting networking and partnership opportunities between communities, 
                projects, exchanges and businesses alike.`
              })}
            </ExpandCollapse>
          </div>
        </div>
      </div>
    </div>
  );
};
