import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:silverhairs/src/presentation/pages/layout.dart';
import 'package:silverhairs/src/utils/styles.dart';

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        textTheme: GoogleFonts.poppinsTextTheme(),
        scaffoldBackgroundColor: AppColors.light,
      ),
      home: MainLayout(),
    );
  }
}
