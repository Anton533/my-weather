import 'package:flutter/material.dart';

class MainScreenWidget extends StatefulWidget {
  const MainScreenWidget({super.key});

  @override
  State<MainScreenWidget> createState() => _MainScreenWidgetState();
}

class _MainScreenWidgetState extends State<MainScreenWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Weather'),
      ),
      body: Center(
        child: Column(
          children: [
            const Padding(
              padding: EdgeInsets.all(10.0),
              child: Text(
                'Select your location:',
                style: TextStyle(fontSize: 20),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(10.0),
              child: TextField(
                  decoration: InputDecoration(border: OutlineInputBorder())),
            ),
            ElevatedButton(onPressed: () {}, child: const Text('Search')),
            const SizedBox(height: 50),
            ElevatedButton(
                onPressed: () {},
                child: const Text('Detect location automatically')),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.today),
            label: 'Today',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.timelapse),
            label: '24 houers',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.next_week),
            label: '7 days',
          ),
        ],
        // currentIndex: _selectedIndex,
        selectedItemColor: Colors.blue,
        // onTap: _onItemTapped,
      ),
    );
  }
}
