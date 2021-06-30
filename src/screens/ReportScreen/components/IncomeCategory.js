import React, { useRef,useCallback, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { backgroundColor } from "../../../api/constants";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Animated,
  Platform
} from 'react-native';
import {Svg} from 'react-native-svg'
import { COLORS, FONTS, SIZES, icons, images } from '../../../api/index';
import { VictoryPie } from 'victory-native';
import moment from 'moment';
import { formatNumber } from '../../../api/helper';


const ExpenseCategory=()=> {
  const confirmStatus = "C"
  const pendingStatus = "P"
  
//{Load data=============================================================}
const transactions = useSelector(
    (state) =>
      state.wallets.wallets.find(
        (wallet) => wallet.id === state.wallets.lastUsedWalletId
      ).transactions
  );
  const loadtransactions=transactions.filter(x=>x.type=="Income")

  const loadcategories = useSelector(
    (state) =>state.categories
  );
  let tcategories=[]
  for (const id in loadcategories){
    tcategories.push({expenses:[ ],id:id,name:loadcategories[id].title,icon:loadcategories[id].icon,color:loadcategories[id].color})
  }
  for (const id in loadtransactions){
    var t=loadtransactions[id].categoryId
    tcategories[t-1].expenses.push({id:id,title:loadtransactions[id].note,date:moment(loadtransactions[id].date).format("DD/MM/YYYY"),total:loadtransactions[id].moneyAmount,status:confirmStatus})
  }
  let chartCategories=tcategories.filter((e)=>
      e.expenses.length!=0
  )
  // dummy data
  const [categories, setCategories] = useState(tcategories)
  const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;
  const [viewMode, setViewMode] = useState("chart")
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showMoreToggle, setShowMoreToggle] = useState(false)

function renderCategoryHeaderSection() {
  return (
      <View style={{ marginTop:-24,backgroundColor: COLORS.white,flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Title */}
          <View>
              <Text style={{ color: COLORS.darkgreen, ...FONTS.h3 }}>CATEGORIES</Text>
              <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>Total</Text>
          </View>

          {/* Button */}
          <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                  style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: viewMode == "chart" ? COLORS.darkgreen : null,
                      height: 50,
                      width: 50,
                      borderRadius: 25
                  }}
                  onPress={() => setViewMode("chart")}
              >
                  <Image
                      source={icons.chart}
                      resizeMode="contain"
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
                      }}
                  />
              </TouchableOpacity>

              <TouchableOpacity
                  style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: viewMode == "list" ? COLORS.darkgreen : null,
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      marginLeft: SIZES.base
                  }}
                  onPress={() => setViewMode("list")}
              >
                  <Image
                      source={icons.menu}
                      resizeMode="contain"
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
                      }}
                  />
              </TouchableOpacity>
          </View>
      </View>
  )
}
function renderCategoryList() {
  const renderItem = ({ item }) => (
      <TouchableOpacity
          onPress={() => setSelectedCategory(item)}
          style={{
              flex: 1,
              flexDirection: 'row',
              margin: 5,
              paddingVertical: SIZES.radius,
              paddingHorizontal: SIZES.padding,
              borderRadius: 5,
              backgroundColor: COLORS.white,
              ...styles.shadow
          }}
      >
          <Image
              source={item.icon}
              style={{
                  width: 20,
                  height: 20,
                  
              }}
          />
          <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
      </TouchableOpacity>
  )

  return (
      <View style={{backgroundColor: COLORS.white, paddingHorizontal: SIZES.padding - 5 }}>
          <Animated.View style={{ height: categoryListHeightAnimationValue }}>
              <FlatList
                  data={categories}
                  renderItem={renderItem}
                  keyExtractor={item => `${item.id}`}
                  numColumns={2}
              />
          </Animated.View>

          <TouchableOpacity
              style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  justifyContent: 'center'
              }}
              onPress={() => {
                  if (showMoreToggle) {
                      Animated.timing(categoryListHeightAnimationValue, {
                          toValue: 115,
                          duration: 500,
                          useNativeDriver: false
                      }).start()
                  } else {
                      Animated.timing(categoryListHeightAnimationValue, {
                          toValue: 300,
                          duration: 500,
                          useNativeDriver: false
                      }).start()
                  }

                  setShowMoreToggle(!showMoreToggle)
              }}
          >
              <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
              <Image
                  source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                  style={{ marginLeft: 5, width: 15, height: 15, alignSelf: 'center' }}
              />
          </TouchableOpacity>
      </View>
  )
}
function renderIncomingExpensesTitle() {
  return (
      <View style={{ height: 80, backgroundColor: COLORS.lightGray2, padding: SIZES.padding }}>
          {/* Title */}
          <Text style={{ ...FONTS.h3, color: COLORS.primary }}>INCOMING EXPENSES</Text>
          
      </View>
  )
}

function renderIncomingExpenses() {
  let allExpenses = selectedCategory ? selectedCategory.expenses : []
  let incomingExpenses = allExpenses.filter(a => a.status == "C")
  const renderItem = ({ item, index }) => (
      <View style={{
          width: 300,
          marginRight: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow
      }}>
          {/* Title */}
          <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
              <View
                  style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      backgroundColor: COLORS.lightGray,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: SIZES.base
                  }}
              >
                  <Image
                      source={selectedCategory.icon}
                      style={{
                          width: 30,
                          height: 30,
                          
                      }}
                  />
              </View>

              <Text style={{ ...FONTS.h3, color: selectedCategory.color, }}>{selectedCategory.name}</Text>
          </View>

          {/* Expense Description */}
          <View style={{ paddingHorizontal: SIZES.padding }}>
              {/* Title and description */}
              <Text style={{ ...FONTS.h3, }}>{item.title}</Text>


              {/* Location */}
              <Text style={{ marginTop: SIZES.padding, ...FONTS.h4, }}>Date</Text>
              <View style={{ flexDirection: 'row' }}>
                  <Image
                      source={icons.calendar}
                      style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.darkgray,
                          marginRight: 5
                      }}
                  />
                  <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.date}</Text>
              </View>
          </View>

          {/* Price */}
          <View
              style={{
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomStartRadius: SIZES.radius,
                  borderBottomEndRadius: SIZES.radius,
                  backgroundColor: selectedCategory.color,
              }}
          >
              <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Price: {formatNumber(item.total)} VND</Text>
          </View>
      </View>
  )

  return (
      <View>
          {renderIncomingExpensesTitle()}

          {
              incomingExpenses.length > 0 &&
              <FlatList
                  data={incomingExpenses}
                  renderItem={renderItem}
                  keyExtractor={item => `${item.id}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
              />
          }

          {
              incomingExpenses.length == 0 &&
              <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                  <Text style={{color:'black',fontWeight:'bold', ...FONTS.h1 }}>No Record</Text>
              </View>
          }

      </View>

  )
}
function setSelectCategoryByName(name) {
  let category = categories.filter(a => a.name == name)
  setSelectedCategory(category[0])
}
function processCategoryDataToDisplay() {
  // Filter expenses with "Confirmed" status
  let chartData = chartCategories.map((item) => {
      let confirmExpenses = item.expenses.filter(a => a.status == "C")
      var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

      return {
          name: item.name,
          y: total,
          expenseCount: confirmExpenses.length,
          color: item.color,
          id: item.id
      }
  })
  

  // filter out categories with no data/expenses
  let filterChartData = chartData.filter(a => a.y > 0)
  
  // Calculate the total expenses
  let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

  // Calculate percentage and repopulate chart data
  let finalChartData = filterChartData.map((item) => {
      let percentage = (item.y / totalExpense * 100).toFixed(0)
      return {
          label: `${percentage}%`,
          y: Number(item.y),
          expenseCount: item.expenseCount,
          color: item.color,
          name: item.name,
          id: item.id
      }
  })
  return finalChartData
}
function renderChart() {
  let chartData = chartCategories.map((item) => {
    let confirmExpenses = item.expenses.filter(a => a.status == "C")
    var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

    return {
        name: item.name,
        y: total,
        expenseCount: confirmExpenses.length,
        color: item.color,
        id: item.id
    }
})
  
  let colorScales = chartData.map((item) => item.color)
  let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

  if(Platform.OS == 'ios')
  {
      return (
          <View  style={{ alignItems: 'center', justifyContent: 'center' }}>
              <VictoryPie
                  
                  data={chartData}
                  labels={(datum) => `${datum.y}`}
                  radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                  innerRadius={70}
                  labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                  style={{
                      labels: { fill: "white", ...FONTS.body3 },
                      parent: {
                          ...styles.shadow
                      },
                  }}
                  width={SIZES.width * 0.8}
                  height={SIZES.width * 0.8}
                  colorScale={colorScales}
                  events={[{
                      target: "data",
                      eventHandlers: {
                          onPress: () => {
                              return [{
                                  target: "labels",
                                  mutation: (props) => {
                                      let categoryName = chartData[props.index].name
                                      setSelectCategoryByName(categoryName)
                                  }
                              }]
                          }
                      }
                  }]}

              />

              <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                  <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                  <Text style={{ ...FONTS.body3,color:COLORS.darkgreen, textAlign: 'center' }}>Income</Text>
              </View>
          </View>

      )
  }
  else
  {
      // Android workaround by wrapping VictoryPie with SVG
      return (
          <View  style={{backgroundColor:COLORS.white, alignItems: 'center', justifyContent: 'center' }}>
              <Svg width={SIZES.width} height={SIZES.width} style={{width: "100%", height: "auto"}}>
                    
                  <VictoryPie
                      standalone={false} // Android workaround
                      data={chartData}
                      x="name"
                      radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                      innerRadius={70}
                      labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                      style={{
                          labels: { fill: "white", ...FONTS.body3 },
                          parent: {
                              ...styles.shadow
                          },
                      }}
                      width={SIZES.width}
                      height={SIZES.width}
                      colorScale={colorScales}
                      events={[{
                          target: "data",
                          eventHandlers: {
                              onPress: () => {
                                  return [{
                                      target: "labels",
                                      mutation: (props) => {
                                          let categoryName = chartData[props.index].name
                                          setSelectCategoryByName(categoryName)
                                      }
                                  }]
                              }
                          }
                      }]}
  
                  />
              </Svg>
              <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                  <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{loadtransactions.length}</Text>
                  <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Income</Text>
              </View>
          </View>
      )
  }
  
}
function renderExpenseSummary() {
  let data = processCategoryDataToDisplay()

  const renderItem = ({ item }) => (
      <TouchableOpacity
          style={{
              flexDirection: 'row',
              marginBottom:5,
              height: 40,
              paddingHorizontal: SIZES.radius,
              borderRadius: 10,
              backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white,
              ...styles.shadow
          }}
          onPress={() => {
              let categoryName = item.name
              setSelectCategoryByName(categoryName)
          }}
      >
          {/* Name/Category */}
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View
                  style={{
                      width: 20,
                      height: 20,
                      backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : item.color,
                      borderRadius: 5
                  }}
              />

              <Text style={{ marginLeft: SIZES.base, color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
          </View>

          {/* Expenses */}
          <View style={{ justifyContent: 'center' }}>
              <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{formatNumber(item.y)} VND - {item.label}</Text>
          </View>
      </TouchableOpacity>
  )

  return (
      <View style={{ backgroundColor:COLORS.white,padding: SIZES.padding }}>
          <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => `${item.id}`}
          />
      </View>

  )
}
  return (
    
    <View style={styles.container}>

       {renderCategoryHeaderSection()}
       <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {renderChart()}
                        {renderExpenseSummary()}
                    </View>
                }
            </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
}
});
export default ExpenseCategory;