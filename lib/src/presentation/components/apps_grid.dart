import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:silverhairs/src/utils/styles.dart';

class AppsGrid extends StatelessWidget {
  const AppsGrid({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverGrid(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 4,
        mainAxisSpacing: 16,
        crossAxisSpacing: 16,
      ),
      delegate: SliverChildListDelegate([
        AppIcon(
          label: 'Twitter',
          background: AppColors.blue,
          icon: EvaIcons.twitter,
          iconColor: AppColors.white,
        ),
        AppIcon(
          label: 'GitHub',
          background: AppColors.black,
          icon: EvaIcons.github,
          iconColor: AppColors.white,
        ),
        AppIcon(
          label: 'LinkedIn',
          background: AppColors.blue,
          icon: EvaIcons.linkedin,
          iconColor: AppColors.white,
        ),
        AppIcon(
          label: 'About me',
          background: AppColors.orange,
          icon: CupertinoIcons.doc_person_fill,
          iconColor: AppColors.white,
        ),
        AppIcon(
          label: 'Email',
          background: AppColors.lightBlue,
          icon: CupertinoIcons.envelope_fill,
          iconColor: AppColors.white,
        ),
        AppIcon(
          label: 'Projects',
          background: AppColors.teal,
          icon: EvaIcons.cube,
          iconColor: AppColors.white,
        ),
        AppIcon(
          label: 'Articles',
          background: AppColors.black,
          icon: EvaIcons.printer,
          iconColor: AppColors.white,
        ),
        AppIcon(
          label: 'My Resume',
          background: AppColors.black,
          icon: CupertinoIcons.doc_plaintext,
          iconColor: AppColors.white,
        ),
      ]),
    );
  }
}

class AppIcon extends StatelessWidget {
  const AppIcon({
    required this.icon,
    this.background = AppColors.white,
    this.iconColor = AppColors.orange,
    this.onPressed,
    required this.label,
    Key? key,
  }) : super(key: key);

  final IconData icon;
  final Color background, iconColor;
  final VoidCallback? onPressed;
  final String label;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: SizedBox(
        height: 80,
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: background,
                borderRadius: kRadius,
              ),
              child: Icon(
                icon,
                color: iconColor,
                size: 30,
              ),
            ),
            SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(color: AppColors.white, fontSize: 12),
            ),
          ],
        ),
      ),
    );
  }
}
