import { View, Text } from "react-native";
import React, { useState } from "react";
import { ITEM_APPLICATION_CARD_STYLE } from "../../../../styling/cards";
import {
  EApplicationStatus,
  getStatusColor,
  getStatusLabel,
} from "../../../../utils/system";
import { generateKey } from "../../../../utils";
import ResultStatusPreviewCard from "./ResultStatusPreviewCard";
import { APP_COLORS } from "../../../../styling/colors";

const ItemApplication = ({ item }) => {
  // const [statusColor, setStatusColor] = useState(getStatusColor(item.status[0]));

  const renderResultsCheck = () =>
    (item?.tests?.length ? item.tests.slice(0, 5) : []).map((value, _) => (
      <ResultStatusPreviewCard key={generateKey()} value={value} />
    ));
  return (
    <View style={[ITEM_APPLICATION_CARD_STYLE.container]}>
      <View style={ITEM_APPLICATION_CARD_STYLE.top}>
        {/* <View style={ITEM_APPLICATION_CARD_STYLE.left}>
          <View
            style={[
              ITEM_APPLICATION_CARD_STYLE.status,
              {
                // backgroundColor: statusColor.color,
                borderColor: statusColor.textColor,
              },
            ]}
          >
            <Text
              adjustsFontSizeToFit
              style={[
                ITEM_APPLICATION_CARD_STYLE.status_text,
                {
                  color: statusColor.textColor,
                },
              ]}
            >
              {getStatusLabel(item.status[0])}
            </Text>
          </View>
        </View> */}
        <View style={ITEM_APPLICATION_CARD_STYLE.right}>
          <View
            style={[
              ITEM_APPLICATION_CARD_STYLE.service,
              {
                // borderColor: statusColor.textColor,
              },
            ]}
          >
            <Text style={ITEM_APPLICATION_CARD_STYLE.application_name}>
              {item?.name}
            </Text>
          </View>
        </View>
      </View>

      <View style={ITEM_APPLICATION_CARD_STYLE.bottom}>
        {renderResultsCheck()}
        {item?.tests?.length && item.tests.length > 5 && (
          <View
            style={[
              ITEM_APPLICATION_CARD_STYLE.preview_status_time,
              {
                backgroundColor: APP_COLORS.BLUE_COLOR.color,
              },
            ]}
          >
            <Text style={[ITEM_APPLICATION_CARD_STYLE.status_text, { color: APP_COLORS.WHITE_COLOR.color}]}>
              + {`${ item.tests.length - 5}`}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default React.memo(ItemApplication);
