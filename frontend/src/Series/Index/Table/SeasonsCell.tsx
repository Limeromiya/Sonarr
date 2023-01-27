import React from 'react';
import VirtualTableRowCell from 'Components/Table/Cells/VirtualTableRowCell';
import Popover from 'Components/Tooltip/Popover';
import TooltipPosition from 'Helpers/Props/TooltipPosition';
import SeasonDetails from 'Series/Index/Select/SeasonPass/SeasonDetails';
import { Season } from 'Series/Series';
import translate from 'Utilities/String/translate';

interface SeriesStatusCellProps {
  className: string;
  seriesId: number;
  seasonCount: number;
  seasons: Season[];
  isSelectMode: boolean;
}

function SeasonsCell(props: SeriesStatusCellProps) {
  const {
    className,
    seriesId,
    seasonCount,
    seasons,
    isSelectMode,
    ...otherProps
  } = props;

  return (
    <VirtualTableRowCell className={className} {...otherProps}>
      {isSelectMode ? (
        <Popover
          anchor={<span>{seasonCount}</span>}
          title={translate('Season Details')}
          body={<SeasonDetails seriesId={seriesId} seasons={seasons} />}
          position={TooltipPosition.Left}
        />
      ) : (
        seasonCount
      )}
    </VirtualTableRowCell>
  );
}

export default SeasonsCell;
