import 'package:flutter/cupertino.dart';
import 'package:intl/intl.dart';
import 'package:silverhairs/src/utils/styles.dart';

class IPhoneHeader extends StatelessWidget {
  const IPhoneHeader({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverPadding(
      padding: EdgeInsets.only(bottom: 16),
      sliver: SliverToBoxAdapter(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            NetworkHeaderLabel(),
            Text(
              '${DateFormat.jm('en_US').format(DateTime.now())}',
              style: TextStyle(color: AppColors.white),
            ),
            Icon(
              CupertinoIcons.battery_100,
              size: 16,
              color: AppColors.white,
            )
          ],
        ),
      ),
    );
  }
}

class NetworkHeaderLabel extends StatelessWidget {
  const NetworkHeaderLabel({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 30,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Icon(
            CupertinoIcons.airplane,
            color: AppColors.white,
            size: 14,
          ),
          Icon(
            CupertinoIcons.wifi,
            size: 14,
            color: AppColors.white,
          )
        ],
      ),
    );
  }
}
