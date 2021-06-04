import 'package:flutter/material.dart';

class HomeButton extends StatelessWidget {
  const HomeButton({required this.onPressed, Key? key}) : super(key: key);

  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onPressed,
      child: Container(
        padding: EdgeInsets.only(top: 8),
        height: 60,
        width: 60,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            width: 2,
            color: Colors.grey.withOpacity(0.5),
          ),
        ),
      ),
    );
  }
}
