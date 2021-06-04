import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:silverhairs/src/presentation/components/home_btn.dart';
import 'package:silverhairs/src/utils/styles.dart';

import 'apps_grid.dart';
import 'iphone_header.dart';

class IPhone extends StatelessWidget {
  const IPhone({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      elevation: 6,
      borderRadius: kRadius * 3,
      color: AppColors.white,
      shadowColor: Colors.grey,
      child: Container(
        width: 450,
        height: 850,
        padding: EdgeInsets.all(24),
        decoration: BoxDecoration(
          borderRadius: kRadius * 3,
          color: AppColors.white,
        ),
        child: Column(
          children: [
            Container(
              height: 6,
              width: 6,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppColors.black,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    height: 8,
                    width: 8,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: AppColors.black,
                    ),
                  ),
                  SizedBox(width: 12),
                  Container(
                    width: 75,
                    height: 4,
                    decoration: BoxDecoration(
                      color: AppColors.dark.withOpacity(0.3),
                      borderRadius: kRadius,
                    ),
                  ),
                ],
              ),
            ),
            Flexible(
              fit: FlexFit.tight,
              child: Container(
                padding: EdgeInsets.only(
                  left: 16,
                  right: 16,
                  bottom: 16,
                ),
                width: double.infinity,
                margin: EdgeInsets.all(8),
                decoration: BoxDecoration(
                  border: Border.all(color: AppColors.dark),
                  image: DecorationImage(
                    image: AssetImage('assets/wallpaper.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
                child: CustomScrollView(
                  physics: NeverScrollableScrollPhysics(),
                  slivers: [
                    IPhoneHeader(),
                    AppsGrid(),
                    SliverPadding(
                      padding: EdgeInsets.symmetric(vertical: 16),
                      sliver: SliverToBoxAdapter(
                        child: Container(
                          height: 120,
                          width: double.infinity,
                          decoration: BoxDecoration(
                            color: AppColors.dark.withOpacity(0.5),
                            borderRadius: kRadius * 2,
                          ),
                        ),
                      ),
                    ),
                    SliverFillRemaining(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            height: 75,
                            width: double.infinity,
                            decoration: BoxDecoration(
                              color: AppColors.dark.withOpacity(0.7),
                              borderRadius: kRadius * 2,
                            ),
                            child: Container(
                              width: 65,
                              height: 65,
                              decoration: BoxDecoration(
                                borderRadius: kRadius * 2,
                                color: AppColors.orange,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            HomeButton(
              onPressed: () => print(
                '//TODO: Home btn pressed',
              ),
            ),
          ],
        ),
      ),
    );
  }
}
