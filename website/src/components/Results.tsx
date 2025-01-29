import {first, last} from 'lodash';
import React from 'react';
import styled from 'styled-components';

import {Node} from '../types';
import {getNumberWithCommas} from '../utils';
import {StyledTextLink} from './common/StyledTextLink';
import {ResultsGraph} from './ResultsGraph';
import {ResultsList} from './ResultsList';

const ResultsMessage = styled.div`
  width: 800px;
  margin: 32px auto 20px auto;
  text-align: center;

  & > p {
    font-size: 28px;
    line-height: 1.5;
    margin-bottom: 12px;
    color: ${({theme}) => theme.colors.darkGreen};
  }

  @media (max-width: 1200px) {
    width: 70%;

    & > p {
      font-size: 24px;
    }
  }
`;

/**
 * Adds some character to the results by rendering a snarky comment for certain degrees of
 * separation.
 */
const SnarkyContent: React.FC<{
  readonly degreesOfSeparation: number;
}> = ({degreesOfSeparation}) => {
  if (degreesOfSeparation >= 2 && degreesOfSeparation <= 4) {
    return null;
  }

  let snarkyContent: React.ReactNode;
  if (degreesOfSeparation === 0) {
    snarkyContent = (
      <>
        <b>Seriously?</b> Talk about overqualified for the job...
      </>
    );
  } else if (degreesOfSeparation === 1) {
    snarkyContent = <>Thanks for making my job easy...</>;
  } else if (degreesOfSeparation === 5) {
    snarkyContent = (
      <>
        <b>*wipes brow*</b> I really had to work for this one.
      </>
    );
  } else if (degreesOfSeparation === 6) {
    snarkyContent = (
      <>
        <b>*breathes heavily*</b> What a workout!
      </>
    );
  } else if (degreesOfSeparation >= 7) {
    snarkyContent = (
      <>
        <b>*picks jaw up from floor*</b> That was intense!
      </>
    );
  }

  return (
    <p>
      <i>{snarkyContent}</i>
    </p>
  );
};

/**
 *  Adds a warning if the source and/or target page(s) were redirects.
 */
const RedirectWarning: React.FC<{
  isSourceRedirected: boolean;
  isTargetRedirected: boolean;
}> = ({isSourceRedirected, isTargetRedirected}) => {
  let redirectContent;
  if (isSourceRedirected && isTargetRedirected) {
    redirectContent = (
      <p>
        <b>Note:</b> Provided start and end pages are redirects.
      </p>
    );
  } else if (isSourceRedirected) {
    redirectContent = (
      <p>
        <b>Note:</b> Provided start page is a redirect.
      </p>
    );
  } else if (isTargetRedirected) {
    redirectContent = (
      <p>
        <b>Note:</b> Provided end page is a redirect.
      </p>
    );
  }

  return redirectContent;
};

export const Results: React.FC<{
  readonly paths: readonly Node[][];
  readonly sourceLabel: string;
  readonly targetLabel: string;
  readonly isSourceRedirected: boolean;
  readonly isTargetRedirected: boolean;
  readonly durationInSeconds: string;
}> = ({
  paths,
  sourceLabel,
  targetLabel,
  isSourceRedirected,
  isTargetRedirected,
  durationInSeconds,
}) => {
  const sourceUrl = first(paths[0])?.url;
  const targetUrl = last(paths[0])?.url;
  const sourcePageLink = <StyledTextLink text={sourceLabel} href={sourceUrl} target="_blank" />;
  const targetPageLink = <StyledTextLink text={targetLabel} href={targetUrl} target="_blank" />;

  // No paths found.
  if (paths.length === 0) {
    return (
      <ResultsMessage>
        <p>
          <b>No path</b> exists from {sourcePageLink} to {targetPageLink}
        </p>
        <RedirectWarning
          isSourceRedirected={isSourceRedirected}
          isTargetRedirected={isTargetRedirected}
        />
      </ResultsMessage>
    );
  }

  const degreesOfSeparation = paths[0].length - 1;
  const pathOrPaths = paths.length === 1 ? 'path' : 'paths';
  const degreeOrDegrees = degreesOfSeparation === 1 ? 'degree' : 'degrees';

  return (
    <>
      <ResultsMessage>
        <SnarkyContent degreesOfSeparation={degreesOfSeparation} />
        <p>
          Found{' '}
          <b>
            {getNumberWithCommas(paths.length)} {pathOrPaths}
          </b>{' '}
          with{' '}
          <b>
            {degreesOfSeparation} {degreeOrDegrees}
          </b>{' '}
          of separation from {sourcePageLink} to {targetPageLink} in{' '}
          <b>{durationInSeconds} seconds!</b>
        </p>
        <RedirectWarning
          isSourceRedirected={isSourceRedirected}
          isTargetRedirected={isTargetRedirected}
        />
      </ResultsMessage>
      <ResultsGraph paths={paths} />
      <ResultsList paths={paths} />
    </>
  );
};
