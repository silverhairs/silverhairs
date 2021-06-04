import 'package:flutter/cupertino.dart';
import 'package:flutter/painting.dart';

final kRadius = BorderRadius.circular(8);

double pageHeight(BuildContext context) => MediaQuery.of(context).size.height;
double pageWidth(BuildContext context) => MediaQuery.of(context).size.width;

class AppColors {
  static const Color white = Color(0xffffffff);
  static const Color black = Color(0xff000000);
  static const Color grey = Color(0xffc0c0c0);
  static const Color light = Color(0xfff5f5f5);
  static const Color dark = Color(0xff363636);
  static const Color teal = Color(0xff00d1b2);
  static const Color blue = Color(0xff3273dc);
  static const Color lightBlue = Color(0xff209cee);
  static const Color green = Color(0xff23d160);
  static const Color yellow = Color(0xffffdd57);
  static const Color orange = Color(0xffff9000);
  static const Color red = Color(0xffff3860);
  static const Color gold = Color(0xffFFD700);
}
