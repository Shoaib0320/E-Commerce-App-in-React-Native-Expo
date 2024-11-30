import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://your-image-url.com/profile-picture.jpg" }} // Replace with actual profile picture URL
          style={styles.profileImage}
        />
        <ThemedText type="title" align="center" style={styles.userName}>
          John Doe
        </ThemedText>
        <ThemedText type="subheading" align="center" style={styles.userEmail}>
          johndoe@example.com
        </ThemedText>
      </View>

      <View style={styles.detailsSection}>
        <ThemedText type="subheading" align="left" style={styles.sectionTitle}>
          Personal Details
        </ThemedText>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Name: John Doe</Text>
          <Text style={styles.detailText}>Email: johndoe@example.com</Text>
          <Text style={styles.detailText}>Phone: +123 456 7890</Text>
        </View>
      </View>

      <View style={styles.orderHistorySection}>
        <ThemedText type="subheading" align="left" style={styles.sectionTitle}>
          Order History
        </ThemedText>
        <View style={styles.orderContainer}>
          <Text style={styles.orderText}>Order #1 - $50.00 - Delivered</Text>
          <Text style={styles.orderText}>Order #2 - $30.00 - Pending</Text>
          <Text style={styles.orderText}>Order #3 - $25.00 - Delivered</Text>
        </View>
      </View>

      <View style={styles.editProfileSection}>
        <TouchableOpacity style={styles.editButton} onPress={() => alert("Edit Profile Pressed")}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedbackButton} onPress={() => alert("Feedback Pressed")}>
          <Text style={styles.feedbackButtonText}>Give Feedback</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#888",
  },
  detailsSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  orderHistorySection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  orderContainer: {
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  editProfileSection: {
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
    marginBottom: 10,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  feedbackButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
  },
  feedbackButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
