import styled from 'styled-components';

const Info = styled.div`
  margin-bottom: 25px;
`;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Content = styled.div`
  margin-bottom: 30px;

  & :global(.table-responsive) {
    width: 100%;
    overflow-x: auto;
  }

  & :global(.table) {
    border-collapse: collapse;
    margin: 15px 0;
    min-width: 100%;
    & th, td {
      border: 1px solid #dee2e6;
      padding: 0.35em 0.5em;
      vertical-align: middle;
      &.message {
        color: #a61b1b;
        font-weight: 600;
      }
    }
    & thead th {
      font-weight: 700;
      background: rgba(0,0,0,0.8);
      color: #fff;
      border-top: none;
      font-size: 0.9em;
    }
  }

  & :global(a) {
    max-width: 100%;
  }

  & :global(img) {
    height: auto;
    max-width: 100%;
  }

  & :global(.frame-wrapper-landscape) {
    position: relative;
    padding-bottom: 66%;
    margin: 1.33em 0;
    height: 0;
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  & :global(.frame-wrapper-rect) {
    position: relative;
    padding-bottom: 100%;
    margin: 1.33em 0;
    height: 0;
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  & :global(.anchor-link) {
    color: #9B9FA3;
    text-decoration: none;
    &:hover {
      color: #333;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;

    & :global(.table-responsive) {
      margin: 0 -15px;
      width: auto;
    }
  }
`;

export default { Info, Img, Content };
