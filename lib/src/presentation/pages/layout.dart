import 'package:flutter/material.dart';
import 'package:silverhairs/src/presentation/components/iphone.dart';
import 'package:silverhairs/src/utils/styles.dart';

class MainLayout extends StatelessWidget {
  const MainLayout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: EdgeInsets.all(32),
        width: double.infinity,
        height: pageHeight(context),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Flexible(
              fit: FlexFit.loose,
              child: IPhone(),
            )
          ],
        ),
      ),
    );
  }
}
